import { Link, useLocation } from 'react-router-dom';
import { generateBreadcrumbSchema } from '../../utils/schema';
import './Breadcrumb.css';

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    const breadcrumbItems = [
        { name: 'Home', url: 'https://www.zillioninternational.com/' }
    ];

    pathnames.forEach((value, index) => {
        const url = `https://www.zillioninternational.com/${pathnames.slice(0, index + 1).join('/')}`;
        const name = value.split('-').map(word =>
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
        breadcrumbItems.push({ name, url });
    });

    const schema = generateBreadcrumbSchema(breadcrumbItems);

    if (pathnames.length === 0) return null;

    return (
        <>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
            <nav className="breadcrumb" aria-label="Breadcrumb">
                <ol className="breadcrumb__list">
                    <li className="breadcrumb__item">
                        <Link to="/">Home</Link>
                    </li>
                    {pathnames.map((value, index) => {
                        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                        const isLast = index === pathnames.length - 1;
                        const name = value.split('-').map(word =>
                            word.charAt(0).toUpperCase() + word.slice(1)
                        ).join(' ');

                        return (
                            <li key={to} className="breadcrumb__item">
                                <span className="breadcrumb__separator">›</span>
                                {isLast ? (
                                    <span aria-current="page">{name}</span>
                                ) : (
                                    <Link to={to}>{name}</Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </>
    );
};

export default Breadcrumb;
