import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { toSlug } from '../../utils/stringConverter';
import OrganizerCardList from '../../components/OrganizerCardList/OrganizerCardList';
import { useSelector } from 'react-redux';

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Dropdown from '../../components/Dropdown/Dropdown';

const Organizers = () => {
  const { categories } = useSelector(state => state.category);
  const { categorySlug } = useParams();
  const [search] = useSearchParams();
  const subCategorySlug = search.get('subCategorySlug');

  const [category, setCategory] = useState(null);
  const [subCategoryName, setSubCategoryName] = useState(null);

  useEffect(() => {
    const matchedCategory = categories.find(cat => {
      const isMatch = toSlug(cat.name) === categorySlug;
      const hasSub = subCategorySlug ? cat.subCategories.some(sub => toSlug(sub.name) === subCategorySlug) : true;
      return isMatch && hasSub;
    });

    setCategory(matchedCategory || null);

    if (matchedCategory && subCategorySlug) {
      const matchedSub = matchedCategory.subCategories.find(sub => toSlug(sub.name) === subCategorySlug);
      setSubCategoryName(matchedSub.name || null);
    } else {
      setSubCategoryName(null);
    }
  }, [categorySlug, subCategorySlug, categories]);

  if (!category) return <div>Category or subcategory not found.</div>;

  const breadcrumbItems = [
    {
      title: 'Home',
      link: '/',
    },
    !subCategoryName && {
      title: category.name,
    },
    subCategoryName && {
      title: category.name,
      link: `/category/${toSlug(category.name)}`,
    },
    subCategoryName && {
      title: subCategoryName,
    },
  ].filter(Boolean);
  const displayTitle = subCategoryName || category.name;
  const menuItems = [
    { label: `All ${category.name}`, link: `/category/${toSlug(category.name)}` },
    ...category.subCategories.map(sub => ({
      label: sub.name,
      link: `/category/${toSlug(category.name)}/?subCategorySlug=${toSlug(sub.name)}`,
    })),
  ];

  return (
    <>
      <div
        className={`bg-[url('/defaultCategoryBackground.png')] bg-no-repeat bg-center bg-[length:100vw] p-8 rounded-xl min-h-[250px] relative mb-4`}
      >
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-white">{displayTitle} Tickets</h1>
      </div>
      <Dropdown
        className={'mb-4'}
        buttonLabel={subCategoryName ? subCategoryName : `All ${category.name}`}
        menuItems={menuItems}
      />
      <div>
        <p>Total events: 42</p>
        <OrganizerCardList />
      </div>
    </>
  );
};

export default Organizers;
