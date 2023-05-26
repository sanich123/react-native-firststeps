import { TouchableOpacity, Text, StyleSheet } from "react-native";

type ListItemProps = {
  item: { text: string; id: string };
  deleteHandler: (arg: string) => void;
};

export default function ListItem({ item, deleteHandler }: ListItemProps) {
  const { text, id } = item;
  const { textStyle } = styles;
  return (
    <TouchableOpacity onPress={() => deleteHandler(id)}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    textAlign: "center",
    borderRadius: 10,
    backgroundColor: "#fafafa",
    borderWidth: 1,
    marginTop: "5%",
    marginLeft: "20%",
    marginRight: "20%",
  },
});
