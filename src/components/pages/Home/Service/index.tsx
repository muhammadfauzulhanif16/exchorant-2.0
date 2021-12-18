import { SimpleGrid } from "@chakra-ui/react";
import { Card } from "./Card";
import { Section } from "../../../common/Section";
import { ServiceList } from "./ServiceList";

export const Service = () => {
  return (
    <Section
      container
      header
      title="SERVICES"
      description="Enjoy our unlimited & unmatched service"
      rootProps={{ py: 16, as: "section" }}
    >
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={16}>
        {ServiceList.map(({ title, icon, content }) => {
          return (
            <Card title={title} icon={icon}>
              {content}
            </Card>
          );
        })}
      </SimpleGrid>
    </Section>
  );
};
