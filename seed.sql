DROP DATABASE IF EXISTS soundDB;
CREATE DATABASE soundDB;
USE soundDB;

CREATE TABLE bug (
	id INT NOT NULL AUTO_INCREMENT,
	sound_name VARCHAR(32) NULL,
	sound_file VARCHAR(420) NULL,
	PRIMARY KEY (id)
);

CREATE TABLE drops (
	id INT NOT NULL AUTO_INCREMENT,
	sound_name VARCHAR(32) NULL,
	sound_file VARCHAR(420) NULL,
	PRIMARY KEY (id)
);

CREATE TABLE electronics (
    id INT NOT NULL AUTO_INCREMENT,
    sound_name VARCHAR(32) NULL,
    sound_file VARCHAR(420) NULL,
    PRIMARY KEY (id)
);

CREATE TABLE nature (
    id INT NOT NULL AUTO_INCREMENT,
    sound_name VARCHAR(32) NULL,
    sound_file VARCHAR(420) NULL,
    PRIMARY KEY (id)
);


CREATE TABLE noise (
    id INT NOT NULL AUTO_INCREMENT,
    sound_name VARCHAR(32) NULL,
    sound_file VARCHAR(420) NULL,
    PRIMARY KEY (id)
);

INSERT INTO bug (sound_name, sound_file) VALUES
	('bug-buzz', 'bug-buzz.wav'),
	('bug-call', 'bug-call.wav'),
	('bug-clicks', 'bug-clicks.wav'),
	('bug-fireants', 'bug-fireants.wav'),
	('bug-purring', 'bug-purring.wav'),
	('bug-wings', 'bug-wings.wav');

INSERT INTO drops (sound_name, sound_file) VALUES
	('drops-beatbox', 'drops-beatbox.wav'),
	('drops-explosion', 'drops-explosion.flac'),
	('drops-warble', 'drops-warble.ogg');

INSERT INTO electronics (sound_name, sound_file) VALUES
	('electronics-bubbles', 'electronics-bubbles.wav'),
	('electronics-chatting', 'electronics-chatting.wav'),
	('electronics-chords', 'electronics-chords.wav'),
	('electronics-circus', 'electronics-circus.wav'),
	('electronics-erie', 'electronics-erie.wav'),
	('electronics-gutteral', 'electronics-gutteral.wav'),
	('electronics-highhat', 'electronics-highhat.wav'),
	('electronics-laserhits', 'electronics-laserhits.wav'),
	('electronics-pipes', 'electronics-pipes.wav'),
	('electronics-signal', 'electronics-signal.wav'),
	('electronics-warble', 'electronics-warble.wav');

INSERT INTO nature (sound_name, sound_file) VALUES
	('nature-frogs', 'nature-frogs.mp3');

INSERT INTO noise (sound_name, sound_file) VALUES
	('noise-beads', 'noise-beads.wav'),
	('noise-boioing', 'noise-boioing.wav'),
	('noise-cat', 'noise-cat.wav'),
	('noise-electricwoosh', 'noise-electricwoosh.wav'),
	('noise-laughter', 'noise-laughter.wav'),
	('noise-metaltwang', 'noise-metaltwang.wav'),
	('noise-meteor', 'noise-meteor.wav'),
	('noise-minions', 'noise-minions.wav'),
	('noise-nailpull', 'noise-nailpull.wav'),
	('noise-noisemaker', 'noise-noisemaker.wav'),
	('noise-pied', 'noise-pied.wav'),
	('noise-raspberry', 'noise-raspberry.wav'),
	('noise-recordscratch', 'noise-recordscratch.wav'),
	('noise-squeek', 'noise-squeek.wav'),
	('noise-stungun', 'noise-stungun.wav'),
	('noise-thump', 'noise-thump.wav'),
	('noise-whizz', 'noise-whizz.wav');

COMMIT;

SELECT * FROM soundDB.bug;
SELECT * FROM soundDB.drops;
SELECT * FROM soundDB.electronics;
SELECT * FROM soundDB.nature;
SELECT * FROM soundDB.noise;


SELECT id, sound_name, sound_file FROM soundDB.bug;
SELECT id, sound_name, sound_file FROM soundDB.drops;
SELECT id, sound_name, sound_file FROM soundDB.electronics;
SELECT id, sound_name, sound_file FROM soundDB.nature;
SELECT id, sound_name, sound_file FROM soundDB.noise;
