export enum Category {
    ACTIVITIES = 'ACTIVITIES',
    LOGISTICS = 'LOGISTICS',
    PARTY = 'PARTY',
    RSVP = 'RSVP',
    STORY = 'STORY',
}

export enum Variant {
    DEFAULT = 'DEFAULT',
    PRIMARY = 'PRIMARY',
    SECONDARY = 'SECONDARY',
    SIDE = 'SIDE',
}

export type BackgroundVariant = Variant.DEFAULT | Variant.PRIMARY | Variant.SECONDARY;
export type CardVariant = Variant.DEFAULT | Variant.SIDE;
export type DividerVariant = Variant.PRIMARY | Variant.SECONDARY;