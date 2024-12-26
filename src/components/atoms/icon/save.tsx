interface IconSaveProps {
  color?: string;
}
export const IconSave: React.FC<IconSaveProps> = ({color}) => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 2.9487C0.5 2.19093 0.801019 1.46421 1.33684 0.92839C1.87266 0.392572 2.59938 0.0915527 3.35714 0.0915527H4.78571V5.09155C4.78571 5.65987 5.01148 6.20492 5.41334 6.60678C5.81521 7.00865 6.36025 7.23441 6.92857 7.23441H12.6429C13.2112 7.23441 13.7562 7.00865 14.1581 6.60678C14.5599 6.20492 14.7857 5.65987 14.7857 5.09155V0.0915527H15.3271C16.0848 0.0917146 16.8115 0.39284 17.3471 0.928696L19.6629 3.24441C20.1987 3.7801 20.4998 4.50671 20.5 5.26441V17.2344C20.5 17.9922 20.199 18.7189 19.6632 19.2547C19.1273 19.7905 18.4006 20.0916 17.6429 20.0916V12.2344C17.6429 11.6661 17.4171 11.121 17.0152 10.7192C16.6134 10.3173 16.0683 10.0916 15.5 10.0916H5.5C4.93168 10.0916 4.38663 10.3173 3.98477 10.7192C3.58291 11.121 3.35714 11.6661 3.35714 12.2344V20.0916C2.59938 20.0916 1.87266 19.7905 1.33684 19.2547C0.801019 18.7189 0.5 17.9922 0.5 17.2344V2.9487Z"
        fill={color ? color : 'white'}
      />
      <path
        d="M13.3572 0.0915527H6.21436V5.09155C6.21436 5.28099 6.28961 5.46267 6.42357 5.59663C6.55752 5.73058 6.7392 5.80584 6.92864 5.80584H12.6429C12.8324 5.80584 13.0141 5.73058 13.148 5.59663C13.282 5.46267 13.3572 5.28099 13.3572 5.09155V0.0915527Z"
        fill={color ? color : 'white'}
      />
      <path
        d="M16.2142 12.2345V20.0917H4.78564V12.2345C4.78564 12.0451 4.8609 11.8634 4.99485 11.7295C5.12881 11.5955 5.31049 11.5203 5.49993 11.5203H15.4999C15.6894 11.5203 15.871 11.5955 16.005 11.7295C16.139 11.8634 16.2142 12.0451 16.2142 12.2345Z"
        fill={color ? color : 'white'}
      />
    </svg>
  );
};