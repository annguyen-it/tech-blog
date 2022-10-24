import { Box, Grid, GridItem } from "@chakra-ui/react";
import type { NextPage } from "next";
import { createContext, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Post } from "../../models";
import NewBottom from "./new-bottom";
import NewMain from "./new-main";
import NewRight from "./new-right";
import NewTop from "./new-top";

type SuggestionField = {
  name: Exclude<keyof Post, "coverImage">;
  y: number;
} | null;
type SuggestionContextType = {
  suggestionField: SuggestionField;
  setSuggestionField: (field: SuggestionField) => void;
};
export const NewSuggestionContext = createContext<SuggestionContextType>({
  suggestionField: null,
  setSuggestionField: (_: SuggestionField) => {},
});

const New: NextPage = () => {
  const [edit, setEdit] = useState(true);
  const [suggestionField, setSuggestionField] = useState<SuggestionField>(null);
  const [defaultValues, setDefaultValues] = useState<Post>({
    coverImage: null,
    title: "",
    body: "",
    hashtags: [],
  });
  const methods = useForm<Post>({
    defaultValues,
  });

  function onSetEdit(edit: boolean) {
    setDefaultValues(methods.getValues());
    setEdit(edit);
  }

  return (
    <NewSuggestionContext.Provider
      value={{ suggestionField, setSuggestionField }}
    >
      <FormProvider {...methods}>
        <Box as="main" px={{ base: "2", lg: "4" }} background="#f5f5f5">
          <Grid
            as="form"
            gridTemplateRows="min-content 1fr min-content"
            gridTemplateColumns="64px 7fr 3fr"
            columnGap={{ base: "2", lg: "4" }}
          >
            <GridItem gridColumnStart="1" gridColumnEnd="3">
              <NewTop edit={edit} setEdit={onSetEdit} />
            </GridItem>

            <GridItem
              gridColumnStart={{ lg: "2" }}
              gridColumnEnd={{ base: "span 2", lg: "2" }}
            >
              <NewMain edit={edit} />
            </GridItem>

            <GridItem>
              <NewRight />
            </GridItem>

            <GridItem
              gridColumnStart={{ base: "1", lg: "2" }}
              gridColumnEnd="3"
            >
              <NewBottom />
            </GridItem>
          </Grid>
        </Box>
      </FormProvider>
    </NewSuggestionContext.Provider>
  );
};

export default New;
