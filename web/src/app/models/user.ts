export interface User {
    id?: number;
    name: string;
    email: string;
    password?: string;
    goal?: string;
    days_per_week?: number;
    session_duration?: number;
    health_conditions?: string[];
    dietary_restrictions?: string[];
    fitnessLevel?: 'beginner' | 'intermediate' | 'advanced';
    current_weight?: number;
    target_weight?: number;
    height?: number;
    age?: number;
    gender?: 'male' | 'female' | 'other';
    IMC?: number;
}