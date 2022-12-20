
export interface IEvent {
    onChange?: (value: string) => void;
    onPress?: () => void;
    onChangeText?: ((text: string) => void) | undefined;
    onSubmitEditing?: () => void;
    onSelect?: ((item?: any, index?: number, value?: string) => void | boolean) | undefined;
    onBackButtonPress?: () => void;
}