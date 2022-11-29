# Strapi application

## DB Duplicate room

```sql
INSERT INTO "main"."room_amenities" ("amenitiy", "count", "unit", "room", "ext_data", "order", "published_at", "created_by", "updated_by", "created_at", "updated_at")
 SELECT  "amenitiy", "count", "unit", 11, "ext_data", "order", "published_at", "created_by", "updated_by", "created_at", "updated_at"
  FROM "main"."room_amenities"
 WHERE room = 1;

```
