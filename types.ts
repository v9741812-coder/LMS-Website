
export interface UserRecord {
  email: string;
  password: string;
  name?: string;
}

export interface StudyMaterial {
  title: string;
  url: string;
}

export interface Lesson {
  id: string;
  title: string;
  type: 'video' | 'text' | 'quiz';
  content: string;
  duration: string;
  isCompleted: boolean;
  description?: string;
  studyMaterials?: StudyMaterial[];
}

export interface Course {
  id: string;
  title: string;
  instructor: string;
  thumbnail: string;
  description: string;
  progress: number;
  lessons: Lesson[];
  category: string;
}

export enum AuthStatus {
  IDLE = 'IDLE',
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED'
}