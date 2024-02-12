#!/bin/bash
set -e

gunzip -c ../var/backups/evaluating_material_app_db.gz | psql -U postgres -d evaluating_material_app_db