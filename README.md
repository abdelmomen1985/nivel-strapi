# Strapi application

## DB Duplicate room

```sql
INSERT INTO "main"."room_amenities" ("amenitiy", "count", "unit", "room", "ext_data", "order", "published_at", "created_by", "updated_by", "created_at", "updated_at")
 SELECT  "amenitiy", "count", "unit", 11, "ext_data", "order", "published_at", "created_by", "updated_by", "created_at", "updated_at"
  FROM "main"."room_amenities"
 WHERE room = 1;

```

- media

```
INSERT INTO "main"."upload_file_morph" ("upload_file_id", "related_id", "related_type", "field", "order") VALUES ('117', '12', 'strp_rooms', 'images', '1');
INSERT INTO "main"."upload_file_morph" ("upload_file_id", "related_id", "related_type", "field", "order") VALUES ('115', '12', 'strp_rooms', 'images', '2');
INSERT INTO "main"."upload_file_morph" ("upload_file_id", "related_id", "related_type", "field", "order") VALUES ('114', '12', 'strp_rooms', 'images', '3');
INSERT INTO "main"."upload_file_morph" ("upload_file_id", "related_id", "related_type", "field", "order") VALUES ('110', '12', 'strp_rooms', 'images', '4');
INSERT INTO "main"."upload_file_morph" ("upload_file_id", "related_id", "related_type", "field", "order") VALUES ('111', '12', 'strp_rooms', 'images', '5');
INSERT INTO "main"."upload_file_morph" ("upload_file_id", "related_id", "related_type", "field", "order") VALUES ('112', '12', 'strp_rooms', 'images', '6');
INSERT INTO "main"."upload_file_morph" ("upload_file_id", "related_id", "related_type", "field", "order") VALUES ('113', '12', 'strp_rooms', 'images', '7');
```
