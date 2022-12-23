import { ReactNode } from 'react';
import { BreadcrumbsCustom } from 'src/components/BreadcrumbsCustom';
import DefaultLayout from 'src/layouts/DefaultLayout';

const ListProductPage = () => {
  return (
    <div>
      <BreadcrumbsCustom />
    </div>
  );
};

ListProductPage.getLayout = (page: ReactNode) => <DefaultLayout>{page}</DefaultLayout>;

export default ListProductPage;
