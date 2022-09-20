export enum Variant {
    DEFAULT = 'default',
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    SIDE = 'side',
}

export type BackgroundVariant = Variant.DEFAULT | Variant.PRIMARY | Variant.SECONDARY;
export type CardVariant = Variant.DEFAULT | Variant.SIDE;
export type DividerVariant = Variant.PRIMARY | Variant.SECONDARY;