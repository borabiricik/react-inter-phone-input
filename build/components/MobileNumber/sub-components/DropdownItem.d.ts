import { Country } from '../../../types';
interface DropdownItemProps {
    country: Country;
    dialCode: string;
}
declare const DropdownItem: ({ country, dialCode }: DropdownItemProps) => JSX.Element;
export default DropdownItem;
