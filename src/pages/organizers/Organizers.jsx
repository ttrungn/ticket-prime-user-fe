import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { toSlug } from '../../utils/stringConverter';
import OrganizerCardList from '../../components/OrganizerCardList/OrganizerCardList';
import { useSelector } from 'react-redux';

import organizersStyles from './styles.module.css';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Dropdown from '../../components/Dropdown/Dropdown';

const Organizers = () => {
  const { categories } = useSelector(state => state.category);
  const { categorySlug } = useParams();
  const [search] = useSearchParams();
  const subcategorySlug = search.get('subcategorySlug');

  const [category, setCategory] = useState(null);
  const [subcategoryName, setSubcategoryName] = useState(null);

  useEffect(() => {
    const matchedCategory = categories.find(cat => {
      const isMatch = toSlug(cat.name) === categorySlug;
      const hasSub = subcategorySlug ? cat.subcategories.some(sub => toSlug(sub) === subcategorySlug) : true;
      return isMatch && hasSub;
    });

    setCategory(matchedCategory || null);

    if (matchedCategory && subcategorySlug) {
      const matchedSub = matchedCategory.subcategories.find(sub => toSlug(sub) === subcategorySlug);
      setSubcategoryName(matchedSub || null);
    } else {
      setSubcategoryName(null);
    }
  }, [categorySlug, subcategorySlug, categories]);

  if (!category) return <div>Category or subcategory not found.</div>;

  const breadcrumbItems = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: category.name,
      link: `/category/${toSlug(category.name)}`,
    },
    subcategoryName && {
      title: subcategoryName,
    },
  ].filter(Boolean);
  console.log(category.subcategories);
  const displayTitle = subcategoryName || category.name;

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
        buttonLabel={`All ${category.name}`}
        menuItems={category.subcategories.map((sub, index) => ({
          label: sub,
          link: `/category/${toSlug(category.name)}/?subcategorySlug=${toSlug(sub)}`,
        }))}
      />
      <div>
        <p>Total events: 42</p>
        <OrganizerCardList />
      </div>
    </>
  );
};

export default Organizers;
