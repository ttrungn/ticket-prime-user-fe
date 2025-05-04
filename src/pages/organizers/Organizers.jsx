import { Breadcrumb } from 'antd';
import { useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { toSlug } from '../../utils/stringConverter';
import OrganizerCardList from '../../components/OrganizerCardList/OrganizerCardList';
import { useSelector } from 'react-redux';

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

  const breadcrumbItems = [
    { title: <Link to="/">Home</Link> },
    category && {
      title: subcategoryName ? <Link to={`/category/${categorySlug}`}>{category.name}</Link> : category.name,
    },
    subcategoryName && { title: subcategoryName },
  ].filter(Boolean);

  if (!category) return <div>Category or subcategory not found.</div>;

  const displayTitle = subcategoryName || category.name;

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />

      <h1>{displayTitle}</h1>

      <div style={{ margin: '16px 0' }}>
        <div>Subcategory choosing dropdown</div>
      </div>

      <div>
        <p>Total events: 42</p>
        <OrganizerCardList />
      </div>
    </div>
  );
};

export default Organizers;
