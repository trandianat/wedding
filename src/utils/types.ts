export enum Category {
    ACTIVITIES = 'ACTIVITIES',
    FOOTER = 'FOOTER',
    HEADER = 'HEADER',
    LOGISTICS = 'LOGISTICS',
    PARTY = 'PARTY',
    PHOTOS = 'PHOTOS',
    RSVP = 'RSVP',
    STORY = 'STORY',
    THANKS = 'THANKS',
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