// Import the Config type from 'drizzle-kit'
import type { Config } from 'drizzle-kit';

// Load environment variables from .env file
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });

// Check if DATABASE_URL is defined in the environment variables
if (!process.env.DATABASE_URL) {
    // Log an error message if DATABASE_URL is not found
    console.log('CANNOT FIND DATABASE URL !');
}

// Export the default configuration object
export default {
    // Path to the schema file
    schema: './src/lib/supabase/schema.ts',
    // Output directory for migrations
    out: './migrations',
    // Database driver
    driver: 'pg',
    // Database credentials
    dbCredentials: {
        // Connection string
        connectionString: process.env.DATABASE_URL || '',
    },
} satisfies Config;