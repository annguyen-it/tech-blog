import { Box, Grid, GridItem } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Post } from "../../models";
import NewBottom from "./new-bottom";
import NewMain from "./new-main";
import NewTop from "./new-top";

const New: NextPage = () => {
  const [edit, setEdit] = useState(true);
  const [defaultValues, setDefaultValues] = useState<Post>({
    coverImage: null,
    title: "",
    body: "123",
    hashtags: ["javascript", "newbie", "tutorial"],
  });
  const methods = useForm<Post>({
    defaultValues,
  });

  function onSetEdit(edit: boolean) {
    setDefaultValues(methods.getValues());
    setEdit(edit);
  }

  return (
    <FormProvider {...methods}>
      <Box as="main" px="4" background="#f5f5f5">
        <Grid
          as="form"
          gridTemplateRows="min-content 1fr min-content"
          gridTemplateColumns="64px 7fr 3fr"
        >
          <GridItem gridColumnStart="1" gridColumnEnd="3">
            <NewTop edit={edit} setEdit={onSetEdit}></NewTop>
          </GridItem>
          <GridItem gridColumnStart="2" gridColumnEnd="2">
            <NewMain edit={edit}></NewMain>
          </GridItem>
          <GridItem gridColumnStart="2" gridColumnEnd="span 2">
            <NewBottom></NewBottom>
          </GridItem>
        </Grid>
      </Box>
    </FormProvider>
  );
};

export default New;
