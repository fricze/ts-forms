type FormTitle = string;

enum FormActions {
    Validate = 'ValidateForm',
    Send = 'SendForm',
    Reset = 'SendForm',
}

interface FormAction<Actions = FormActions> {
    name: string;
    action: Actions;
}

interface FormInput {
    name: string;
}

interface Form {
    title: FormTitle;
    children: Array<Form | FormAction>;
    actions: FormAction;
}
