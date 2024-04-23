interface HeaderIconProps extends React.HTMLProps<HTMLDivElement> {
  Image: string;
}
function HeaderIcon({ Image,className="", ...props }:HeaderIconProps) {
  return (
    <div {...props} className={`w-10 cursor-pointer rounded-md h-10 bg-[#E8E8E8] sm:rounded-full flex items-center justify-center  ${className}`}>
      <img src={Image} />
    </div>
  );
}
export default HeaderIcon;
