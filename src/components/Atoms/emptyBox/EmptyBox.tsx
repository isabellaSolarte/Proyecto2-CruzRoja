interface EmptyBoxProps {
  height: number;
  width: number;
}

const EmptyBox = ({ height, width }: EmptyBoxProps) => {
  return <div style={{ height: height, width: width }}></div>;
};

export default EmptyBox;
