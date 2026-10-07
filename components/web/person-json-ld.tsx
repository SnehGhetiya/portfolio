import { USER } from "@/data/user";
import { PROFILE_URLS, SITE_URL } from "@/lib/site";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: USER.displayName,
  url: SITE_URL,
  jobTitle: USER.flipSentences[0],
  email: USER.email,
  sameAs: PROFILE_URLS,
};

export function PersonJsonLd() {
  return (
    <script
      type="application/ld+json"
      // `<` is escaped so profile data can never close the script tag early.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
