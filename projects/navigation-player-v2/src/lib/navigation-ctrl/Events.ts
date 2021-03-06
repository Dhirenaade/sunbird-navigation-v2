export interface NavComponentInput {
    isNavCtrl: boolean;
    alignment: string;
    isLeftEnable: boolean;
    isRightEnable: boolean;
    isFirstPage: boolean;
    isLastPage: boolean;
    leftIcon: string;
    rightIcon: string;
    iconSize: string;
    leftIconUrl: string;
    rightIconUrl: string;
}
export type navEvent = 'next' | 'previous';
