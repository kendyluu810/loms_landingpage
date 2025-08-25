import type { Schema, Struct } from '@strapi/strapi';

export interface ScheduleRowScheduleRow extends Struct.ComponentSchema {
  collectionName: 'components_schedule_row_schedule_rows';
  info: {
    displayName: 'schedule-row';
  };
  attributes: {
    cutOffCargo: Schema.Attribute.Date;
    cutOffSI: Schema.Attribute.Date;
    eta: Schema.Attribute.Date;
    etd: Schema.Attribute.Date;
    vesselName: Schema.Attribute.String;
    voyageNo: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'schedule-row.schedule-row': ScheduleRowScheduleRow;
    }
  }
}
