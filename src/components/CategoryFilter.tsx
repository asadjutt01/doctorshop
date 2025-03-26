import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import { getCategorySubSub } from "@/utils/fetchData/fetchDataFunction";
import { generateSlug } from "@/utils/functions";

interface CategoryFilterProps {
  collections?: any[];
  selectedCategory:any;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ collections,selectedCategory }) => {
  const [subCategories, setSubCategories] = useState<Record<number, any[]>>({});
  const [loading, setLoading] = useState<Record<number, boolean>>({});

  const fetchSubCategories = async (id: any, index: number) => {
    if (subCategories[index]) return; // Prevent duplicate API calls

    setLoading((prev) => ({ ...prev, [index]: true }));

    try {
      const subCategoriesData = await getCategorySubSub(id);
      setSubCategories((prev) => ({ ...prev, [index]: subCategoriesData }));
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    } finally {
      setLoading((prev) => ({ ...prev, [index]: false }));
    }
  };

  return (
    <div className="category-filter">
      <h3>Filters</h3>
      <Accordion>
        {collections?.map((item, index) => (
          <Accordion.Item key={index} eventKey={index.toString()}>
            <Accordion.Header>{item?.name}</Accordion.Header>
            <Accordion.Collapse
              eventKey={index.toString()}
              onEntering={() => fetchSubCategories(item.id, index)} // Fetch only when expanding
            >
              <Accordion.Body>
                {loading[index] ? (
                  <p>Loading...</p>
                ) : subCategories[index]?.length > 0 ? (
                  subCategories[index].map((sub: any) => (
                    <a
                      key={sub.id}
                      // href={`${
                      //   routethird
                      //     ? `/collection/${generateSlug(
                      //         selectedCategory.name
                      //       )}/${generateSlug(
                      //         selectedSubCategory?.name
                      //       )}/${generateSlug(item?.name)}`
                      //     : `/collection/${generateSlug(
                      //         selectedCategory.name
                      //       )}/${generateSlug(item?.name)}`
                      // }`}
                      href={`/collection/${generateSlug(selectedCategory?.name)}/${generateSlug(item?.name)}/${generateSlug(sub?.name)}`}
                    >
                      <p>{sub.name}</p>
                    </a>
                  ))
                ) : (
                  <p>No subcategories found.</p>
                )}
              </Accordion.Body>
            </Accordion.Collapse>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default CategoryFilter;
