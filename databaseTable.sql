CREATE TABLE greeted_users(
id SERIAL PRIMARY KEY,
greeted_names text NOT NULL,
-- NAMES text NOT NULL,
counter int NOT NULL
)