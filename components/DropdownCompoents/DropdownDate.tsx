import React from "react";
import DropdownComponentDate from "./DropdownComponentDate";

interface DropdownOption {
  value: any;
  name: string;
}

interface DropdownDateProps {
  selectedYear: any;
  years: DropdownOption[];
  onChangeYear: (e: any) => void;
  selectedMonth: any;
  months: DropdownOption[];
  onChangeMonth: (e: any) => void;
  selectedDay: any;
  days: DropdownOption[];
  onChangeDay: (e: any) => void;
  className?: string | null;
  disabled?: boolean;
}

export const DropdownDate: React.FC<DropdownDateProps> = ({
  selectedYear,
  years,
  onChangeYear,
  selectedMonth,
  months,
  onChangeMonth,
  selectedDay,
  days,
  onChangeDay,
  className = "h-10 w-[14.5625rem] ",
  disabled = false,
}) => {
  return (
    <div className={`flex justify-between dark:bg-white  ${className}`}>
      <div className={``}>
        <DropdownComponentDate
          selected={selectedYear}
          options={years}
          onChange={(e) => onChangeYear(e)}
          disabled={disabled}
        />
      </div>
      <div className={``}>
        <DropdownComponentDate
          selected={selectedMonth}
          options={months}
          onChange={(e) => onChangeMonth(e)}
          disabled={disabled}
        />
      </div>
      <div className={``}>
        <DropdownComponentDate
          selected={selectedDay}
          options={days}
          onChange={(e) => onChangeDay(e)}
          disabled={disabled}
        />
      </div>
    </div>
  );
};
