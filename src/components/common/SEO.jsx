import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({
    title,
    description,
    keywords,
    canonical,
    ogImage,
    schema
}) => {
    const siteUrl = 'https://www.zillioninternational.com';
    const fullTitle = title ? `Zillion International | ${title}` : 'Zillion International | Global BPO & IT Solutions';
    const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
    const defaultImage = `${siteUrl}/og-image.jpg`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={fullCanonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage || defaultImage} />
            <meta property="og:site_name" content="Zillion International" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={fullCanonical} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={ogImage || defaultImage} />

            {/* Schema.org markup */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string.isRequired,
    keywords: PropTypes.string,
    canonical: PropTypes.string,
    ogImage: PropTypes.string,
    schema: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default SEO;
