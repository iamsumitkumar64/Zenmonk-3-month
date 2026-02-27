interface ValidatorProps {
    text: string;
    sendDataToParent: (isValid: boolean) => void;
}

export type { ValidatorProps }