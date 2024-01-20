// Import necessary modules
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as dotenv from 'dotenv';
import * as schema from '../../../migrations/schema';
import { migrate } from 'drizzle-orm/postgres-js/migrator';

// Load environment variables from .env file
dotenv.config({ path: '.env' });

// Check if DATABASE_URL is defined in the environment variables
if (!process.env.DATABASE_URL) {
    console.log('NO DATABASE URL FOUND !!');
}

// Create a PostgreSQL client using the DATABASE_URL from the environment variables
const client = postgres(process.env.DATABASE_URL as string, { max: 1 });

// Create a Drizzle ORM instance using the PostgreSQL client and the schema
const db = drizzle(client, { schema });

// Function to migrate the database
const migrateDb = async () => {
    try {
        // Log the start of migration
        console.log(' MIGRATING THE CLIENT');

        // Run the migration
        await migrate(db, { migrationsFolder: 'migrations' });

        // Log successful migration
        console.log('CLIENT MIGRATED SUCCESSFULLY');
    } catch (error) {
        // Log any errors during migration
        console.log('ERROR TRYING TO MIGRATE THE CLIENT', error);
    }
};

// Call the migrateDb function to start the migration process
migrateDb();

// Export the Drizzle ORM instance for use in other parts of the application
export default db;