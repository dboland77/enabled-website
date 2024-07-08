

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Customised Adjustments',
    description: `We understand that each disability is unique, so we have designed our system to allow employees to request the adjustments they need.
    
    Our platform allows employers to create customised adjustment plans for each employee, ensuring that they get the support they need.`,
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'Easy Communication',
    description: `Communication is key when it comes to disability adjustments. 
    
    EnableD allows employees and employers to communicate seamlessly, ensuring that everyone is on the same page.`,
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Compliance Tracking',
    description: `EnableD helps employers stay compliant with disability laws and regulations. 
    
    We provide easy-to-use tools that allow you to track adjustments, making it simple to stay on top of your legal obligations.`,
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Data Analytics',
    description: `Our system allows employers to track and analyse adjustment requests, providing valuable insights into employee needs and preferences`,
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    title: 'Personal Adjustment Passport.',
    description: `EnableD allows employees to build up a profile of adjustments that work for them and their unique needs. 
    
    This profile can be exported and used wherever it is needed - not just in the workplace.`,
  },
];

export default function FeaturesPage() {
  return (
    <Page
      title="Features"
      description={`We know that disability adjustments are a complex and sensitive issue,
       so we have designed our features to make it easy for you to meet the needs of your employees.`}
    >
      <AutoFitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <BasicCard key={singleFeature.title} {...singleFeature} />
        ))}
      </AutoFitGrid>
    </Page>
  );
}
