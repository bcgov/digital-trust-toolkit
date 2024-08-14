---
title: Access experience pattern
sidebar_position: 1
---

## Access Overview

The Access experience pattern leverages digital credentials to simplify and secure the way users access services online or in-person. By utilizing digital credentials stored in a digital wallet, users can seamlessly prove their identity or attributes without relying on traditional usernames and passwords or physical IDs. This approach enhances user convenience and strengthens security across various digital interactions.

**How it works**
Digital Trust Access enables users to securely and seamlessly access services online or in person using verifiable digital credentials. The process involves three key steps: Request, Verify, Access.

**Request:** The user initiates the process by navigating to the service website and scanning a QR code using their BC Wallet.

**Verify:** The service requests proof of identity or credentials, which the user reviews and shares through their BC Wallet.

**Access:** The service validates the credentials via the verifiable data registry and grants the user access to the digital service.

![Shows steps through the access pattern](/img/experiencepatterns/Access_Process_Key_Steps.png)

Technology Required:

- **BC Wallet:** A secure digital wallet application for storing and managing digital credentials.
- **Digital credential(s):** A cryptographically secure and verifiable proof of identity or attributes.
- **Your digital service:** The service being accessed, which relies on digital credentials for authentication.

### Benefits
**Problem:** Traditional access methods, such as usernames and passwords, present significant security vulnerabilities and are often cumbersome for people. These methods are prone to data breaches, phishing attacks, and require extensive management for password recovery and updates.

**Benefits:** Digital credentials address these issues by providing a more secure and user-friendly authentication method. They offer cryptographic assurance, reducing the risk of data breaches and identity theft. Additionally, digital credentials streamline the access process, improving the overall user experience and aligning with best practices in digital identity management.

### Suitable use cases
The BC Government offers a variety of solutions for accessing services online or in person, with digital trust and credentials emerging as innovative methods to enhance and complement existing systems. Digital trust solutions provide flexible and secure access, making them suitable for a range of applications.

**Consider Digital Trust If:**

- **New or Existing Services:** Digital trust is valuable for both new and existing services, providing secure access and extending into other experiences like signing, issuing, and messaging through BC Wallet app.
- **Leveraging Existing Credentials:** There are existing digital credentials that can be integrated into your service. If your service requires the issuance of a new credential, that is also possible (see the Issue experience pattern.)
- **Team and Buy-in:** Your organization has the appropriate team and buy-in to lead the adoption of digital trust, ideally agile teams with an appetite for experimentation and innovation.

For a detailed comparison of B.C.'s identity solutions, visit the [Digital Trust website](https://digital.gov.bc.ca/digital-trust/online-identity)​​.

### Technology stacks
There are different digital credential authentication solutions your digital service can leverage.

||[VC-AuthN](https://github.com/bcgov/vc-authn-oidc) & [Pathfinder SSO](https://digital.gov.bc.ca/bcgov-common-components/pathfinder-sso/)|[Traction](https://github.com/bcgov/traction)|**BC Wallet Verify feature**|
| :--- | :--- | :--- | :--- |
|**Description**|Verifiable Credential Authentication via OpenID Connect (VC-AuthN) is ready made using a standardized system|Traction is a customizable digital wallet solution that can both issue, hold and verify digital credentials|Mobile verifier is a feature within the BC Wallet app that can authenticate people in-person|
|**Devices**|Used on web and mobile|Can integrate with web and mobile applications|Used on mobile only|
|**Implementation requirements**|<ul><li>Quick to implement, integrates easily with current web standards.</li><li>May require manual management of user roles/permissions, especially if the proof request does not contain any identifiers for returning people</li></ul>|Requires more time and resources to set up as well as ongoing maintenance|<ul><li>Quick and easy to set up. No implementation required.</li><li>Requires manual human verification.</li></ul>|
|**Customization**|Low - Can use existing and customize proof requests|High- Can customize flows to meet your needs|Low - Can use existing and customize proof requests|
|**Suitability**|<ul><li>Your service already or easily supports OpenID Connect</li><li>Quicker turnaround</li><li>Your access requirements require only a single proof request</li></ul>|Your service needs to scale and integrate with different organizations and services|<ul><li>Quicker turnaround</li><li>Your access requirements require only a single proof request</li></ul>|
|**Capabilities**|Can leverage existing proof requests and digital credentials|Can issue, holder, and verify digital credentials|<ul><li>In-person verification</li><li>No development resources needed</li></ul>|

### Examples
Below are examples illustrating the Access pattern through a sequence diagram and a real-world case study.

**Traction Sequence Diagram Example**

The following sequence diagram visualizes the Access pattern using digital credentials using Traction. It demonstrates the process of a person (Holder) accessing a service (Verifier) with a digital credential issued in their BC wallet.

![Shows steps through the access pattern](/img/experiencepatterns/Access_Pattern_Sequence_Diagram.png)

**[VC-AuthN example - Access to Court Materials](https://digital.gov.bc.ca/digital-trust/justice-project/)**

A practical implementation of Access using VC-AuthN is showcased in the justice sector. Lawyers use a combination of digital credentials to access court materials securely, enhancing efficiency and privacy.
[Watch on YouTube](https://www.youtube.com/watch?v=QphQI_lDAwc&list=PLnjj0g-jwI8gmCuVx4rhF7PT397CJXL0p&index=5) 

## Get started
<!-- Follow the [Service Delivery Manual **INTERNAL LINK**](..) for guidance on activities and workshops that help guide your team **Align**, **Discover**, **Trial** and **Scale**. -->

### 1. Align
Assess the suitability of digital trust for your service by considering security requirements, user needs, and the potential benefits. Assemble an agile team ready to innovate and experiment.

<!-- [Complete the Align phase ->**INTERNAL LINK**](..) -->

### 2. Discover
Research user needs and gather insights from stakeholders to understand how digital credentials can enhance user experience and address specific challenges.

<!-- [Complete the Discover phase ->**INTERNAL LINK**](..) -->

<!-- [Proof request design best practices ->**INTERNAL LINK**](..) -->

### 3. Trial
Implement and test the digital trust solution, conducting pilot trials to validate the approach and refine the implementation based on feedback.

<!-- [Complete the Trial phase ->**INTERNAL LINK**](..) -->

<!-- [How to implement ->**INTERNAL LINK**](..) -->

### 4. Scale
Launch the digital trust solution broadly, monitor its performance, and plan for scaling to cover additional services or a broader user base, ensuring continuous improvement.

<!-- [Complete the Scale phase->**INTERNAL LINK**](..) -->

## Resources
- Play with the [BC Wallet showcase](https://digital.gov.bc.ca/digital-trust/showcase/) to explore how digital credential verification can work
<!-- - [Becoming a Verifier->**INTERNAL LINK**](..) -->
<!-- - [Read the implementation guide->**INTERNAL LINK**](..) -->
## Contact
<!-- For further assistance contact the [**INSERT EMAIL/FORM LINK HERE**] -->
