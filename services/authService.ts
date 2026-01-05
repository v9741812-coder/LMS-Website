
import { SHEET_CSV_URL } from '../constants';

/**
 * Normalizes any link into a direct "Latest Version" raw data stream.
 */
const getRawDataUrl = (url: string): string => {
  let target = (url || SHEET_CSV_URL).trim();
  
  // 1. Remove script tags if pasted
  target = target.replace(/<script.*src=["'](.*)["'].*><\/script>/i, '$1');
  // 2. Remove .js suffix
  target = target.replace(/\.js$/i, '');
  // 3. Remove trailing slashes
  target = target.replace(/\/$/, '');

  console.log("AuthService: Normalizing URL:", target);

  // Handle GitHub Gists
  if (target.includes('gist.github.com')) {
    const parts = target.split('gist.github.com/').pop()?.split('/') || [];
    const hash = parts[parts.length - 1];
    const username = parts.length > 1 ? parts[0] : 'anonymous';
    
    // Convert to the raw content domain which allows CORS
    // Format: https://gist.githubusercontent.com/<user>/<hash>/raw
    const rawUrl = `https://gist.githubusercontent.com/${username}/${hash}/raw?t=${Date.now()}`;
    console.log("AuthService: Target Raw URL:", rawUrl);
    return rawUrl;
  }
  
  return target;
};

export const validateCredentials = async (email: string, pass: string): Promise<boolean> => {
  const inputEmail = email.trim().toLowerCase();
  const inputPass = pass.trim();

  // Safety Admin
  if (inputEmail === 'admin@growthlab.com' && inputPass === 'masteraccess') return true;

  const savedUrl = localStorage.getItem('THE_GROWTH_LAB_CSV_URL') || SHEET_CSV_URL;
  const targetUrl = getRawDataUrl(savedUrl);
  
  try {
    const response = await fetch(targetUrl, { 
      method: 'GET',
      mode: 'cors',
      cache: 'no-store'
    });
    
    if (!response.ok) {
      console.error(`AuthService: Fetch failed with ${response.status}`);
      throw new Error("REACH_ERROR");
    }

    const csvContent = await response.text();
    if (!csvContent || csvContent.length < 3) throw new Error("EMPTY_ERROR");

    localStorage.setItem('THE_GROWTH_LAB_LAST_SYNC', new Date().toLocaleTimeString());

    // Process rows
    const rows = csvContent.split(/\r?\n/).filter(r => r.trim().length > 0);
    
    for (const row of rows) {
      // Split by common separators: comma, semicolon, or tab
      const parts = row.split(/[,\t;]/).map(p => p.trim().replace(/^["']|["']$/g, ''));

      if (parts.length >= 2) {
        const dbEmail = parts[0].toLowerCase();
        const dbPass = parts[1];

        // Skip headers (like "Email", "User", etc.)
        if (dbEmail === 'email' || dbEmail === 'username' || dbEmail === 'user') continue;

        if (dbEmail === inputEmail && dbPass === inputPass) {
          return true;
        }
      }
    }
  } catch (err: any) {
    if (err.message === "REACH_ERROR") throw new Error("Could not reach the database. Check your link.");
    if (err.message === "EMPTY_ERROR") throw new Error("The database is empty. Add users to your Gist.");
    console.warn("AuthService Error:", err);
    throw new Error("Connection error. Ensure your Gist is Public.");
  }

  return false;
};

export const getActiveSheetUrl = (): string => {
  return localStorage.getItem('THE_GROWTH_LAB_CSV_URL') || SHEET_CSV_URL;
};

export const getLastSyncTime = (): string | null => {
  return localStorage.getItem('THE_GROWTH_LAB_LAST_SYNC');
};
