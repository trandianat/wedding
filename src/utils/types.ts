export enum Category {
    ACTIVITIES = 'ACTIVITIES',
    FOOTER = 'FOOTER',
    LOGISTICS = 'LOGISTICS',
    PARTY = 'PARTY',
    RSVP = 'RSVP',
    STORY = 'STORY',
    VENDORS = 'VENDORS',
}

export enum Variant {
    DEFAULT = 'DEFAULT',
    PRIMARY = 'PRIMARY',
    SECONDARY = 'SECONDARY',
    SIDE = 'SIDE',
}

export enum When {
    AFTER = 'after',
    BEFORE = 'before',
}

export type BackgroundVariant = Variant.DEFAULT | Variant.PRIMARY | Variant.SECONDARY;
export type CardVariant = Variant.DEFAULT | Variant.SIDE;
export type DividerVariant = Variant.PRIMARY | Variant.SECONDARY;