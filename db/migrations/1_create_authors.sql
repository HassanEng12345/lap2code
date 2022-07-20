DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    pseudonym VARCHAR(100) NOT NULL,
    body VARCHAR(500)
);
