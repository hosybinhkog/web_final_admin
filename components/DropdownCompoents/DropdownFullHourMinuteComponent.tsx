import React from "react";

interface dropdownOption {
  value: any;
  name: string;
}
interface dropdownComponent {
  selectedHour: any;
  hours: dropdownOption[];
  onChangeHour: (e: any) => void;
  selectedMinute: any;
  minutes: dropdownOption[];
  onChangeMinute: (e: any) => void;
  className?: string | null;
  classNameHour?: string | null;
  classNameHourText?: string | null;
  classNameMinute?: string | null;
  classNameMinuteText?: string | null;
  classNameButtonHour?: string | null;
  classNameButtonMinute?: string | null;
  disabled?: boolean;
}

const DropdownFullHourMinuteComponent: React.FC<dropdownComponent> = ({
  selectedHour,
  hours,
  onChangeHour,
  selectedMinute,
  minutes,
  onChangeMinute,
  className,
  classNameHour,
  classNameHourText,
  classNameMinute,
  classNameMinuteText,
  classNameButtonHour,
  classNameButtonMinute,
  disabled = false,
}) => {
  return <div>DropdownFullHourMinuteComponent</div>;
};

export default DropdownFullHourMinuteComponent;
