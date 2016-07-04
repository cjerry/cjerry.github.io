-- CREATE TABLE fruit AS
  -- SELECT "banana" AS name, "yellow" as color, 1000 AS radioactivity UNION
  -- SELECT "apple"         , "red"            , 20                    UNION
  -- SELECT "lemon"         , "yellow"         , 300                   UNION
  -- SELECT "raspberry"     , "red"            , 10                         ;

CREATE TABLE naturals AS
  WITH num(n) AS (
    SELECT 0 UNION
    SELECT n + 1 FROM num where n < 5
  )
  SELECT * FROM num;
