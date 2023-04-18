import {Textarea} from '@mantine/core';

type inputProps = {
    placeholder: string,
    label: string,
    required: boolean,
}

export default function TextAreaInput({ placeholder='', label='', required}: inputProps ) {
    return (
        <>
            <Textarea
                placeholder={placeholder}
                label={label}
                radius={"md"}
                size={"md"}
                withAsterisk={required}
                {...answer}
            />
        </>
    );
}
