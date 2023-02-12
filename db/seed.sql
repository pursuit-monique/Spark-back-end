\c spark_dev;

INSERT INTO users ( name, about, profile, mood, theme, blocker_main, blockerlist ) VALUES 
('Luigi', 'I''m an extremely sweet, affectionate cat that is quite chatty.', 'https://thumbs.dreamstime.com/b/young-brown-bicolor-domestic-cat-26897614.jpg', 1, 1, 'I tend to be self-conscious', 'Because I''m a monster /n because I enjoy having fun /n because i eat all the food.'),
('Mitsurugi', 'I can be beligerent, and don''t listen to my owners.  I think no means yes, and yes means double yes.', 'https://www.thehappycatsite.com/wp-content/uploads/2021/11/seal-mitted-ragdoll-cat-HC-long.jpg', 2, 3, 'Anger issues', 'I flip my food bowl /n I drag my food bowl /n I literally dont look at people if I am mad.'),
('Dylan', 'I am super loving and sweet.  I should have been a therapy cat', 'https://www.thehappycatsite.com/wp-content/uploads/2021/11/seal-mitted-ragdoll-cat-HC-long.jpg', 3, 1, 'ANXIETY', 'Oh my god I need to run /n Just seeing a stranger makes me cringe /n Hiding time'),
('Kashmir', 'I am also loving and sweet, but I love to play.  Please play with me.  I am also DISGUSTINGLY cute... ', 'https://www.thehappycatsite.com/wp-content/uploads/2021/11/seal-mitted-ragdoll-cat-HC-long.jpg', 3, 2, 'Dependancy disorder', 'DONT LEAVE ME PLEASE /n I WANT TO STAY IN YOUR BED /n STAY WITH ME ALL THE TIME');

INSERT INTO tasks ( user_id,
   goal_id,
   task,
   is_complete
) VALUES (
    1, 1, 'Learn how to sit still', false
),
(
    1, 1, 'Learn how to be quiet', false
),
(
    1, 1, 'Learn how to take notes', true
),
(
    1, 2, 'Learn how to sit still', false
),
(
    1, 2, 'Learn how to be quiet', false
),
(
    1, 2, 'Learn how to take notes', true
),
(
    1, 3, 'Learn how to sit still', false
),
(
    1, 3, 'Learn how to be quiet', false
),
(
    1, 3, 'Learn how to take notes', true
);

INSERT INTO goals (
   name,
   goal_info
) VALUES (
    'Mental Wellness', 'Academic pursuits'
), (
    'Emotional Wellness',  'Meditation, skill building'
), (
    'Social Wellness', 'Community and support'
), (
    'Financial Wellness', 'Finances, money'
), (
    'Spiritual Wellness', 'Spirituality & religion'
), (
    'Physical Wellness', 'Physical ability'
), (
    'Vocational Wellness', 'Work & contributing to the community.'
);