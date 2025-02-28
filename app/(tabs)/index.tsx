import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import SearchInput from "../../components/SearchInput";
import InterestItem from "../../components/InterestItem";
import { fetchInterests } from "../../api/interests";
import { useDebounce } from "../../hooks/useDebounce";

const InterestSearch: React.FC = () => {
  const [query, setQuery] = useState("");
  const [interests, setInterests] = useState([]);
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    fetchInterests("", 15).then((data) => {
      setInterests(
        data.autocomplete.sort((a, b) => a.name.localeCompare(b.name))
      );
    });
  }, []);

  useEffect(() => {
    if (debouncedQuery) {
      setInterests((prevInterests) =>
        prevInterests.filter((item) =>
          item.name.toLowerCase().startsWith(debouncedQuery.toLowerCase())
        )
      );
      fetchInterests(debouncedQuery, 15).then((data) => {
        setInterests((prevInterests) => [
          ...prevInterests,
          ...data.autocomplete.filter(
            (item) => !prevInterests.some((existing) => existing.id === item.id)
          ),
        ]);
      });
    }
  }, [debouncedQuery]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <SearchInput onSearch={setQuery} />
      <FlatList
        data={interests}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <InterestItem
            name={item.name}
            color={item.color}
            avatar={item.avatar}
          />
        )}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#fff" },
});

export default InterestSearch;
