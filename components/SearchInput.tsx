import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";

interface SearchInputProps {
  onSearch: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search interests..."
        value={query}
        onChangeText={(text) => {
          setQuery(text);
          onSearch(text);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { margin: 10, marginTop: "20%" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
  },
});

export default SearchInput;
