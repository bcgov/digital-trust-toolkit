---
title: Issuance Experience Pattern
sidebar_position: 3

---

## Issuance Overview

The Issuance experience pattern uses digital credentials to securely and efficiently issue verifiable proofs of identity, attributes, or claims. By storing verifiable credentials in a digital wallet, issuers can provide individuals and organizations with trusted and secure digital credentials. This enhances trust and security in digital interactions.

### Issuance Process

Issuing digital credentials typically involves three steps: Authentication, Issue, and Store.

**Authentication:** The individual or organization verifies their identity using the service’s authentication method.

**Issue:** The entity requests the digital credential and the issuer generates and securely sends it to the requester's BC Wallet.

**Store:** The requester stores the digital credential in their BC Wallet for future use in accessing services or proving their identity or attributes.

![an example 3 step issuance process where a person verifies their information prior to being issued the credential and then storing it in their digital wallet](/img/experiencepatterns/issuance-process.png "Example issuance process")

**Technology Required:**

- **BC Wallet:** A secure digital wallet application for storing and managing digital credentials.
- **Digital Credential:** A cryptographically secure and verifiable proof of identity, attributes, or claims.
- **Issuer System:** The system used by the issuer to generate and distribute digital credentials.

### Benefits of issuing digital credentials

**Problem:** Traditional credential methods, like paper documents or centralized databases, are prone to forgery, loss, and breaches. They often lack the security and flexibility needed in the digital age.

**Benefits:** Digital credentials offer a secure, user-friendly method for issuing verifiable credentials. They provide cryptographic assurance, reduce the risk of forgery and data breaches, and streamline the issuance process, improving efficiency and aligning with best practices in digital identity management.

### Suitable use cases

The BC Government and other trusted registries traditionally issue credentials through conventional methods. To future-proof credential issuance, digital trust solutions augment and embed within existing services, providing a secure and flexible approach for the digital age.

**Consider Issuance of Digital Credentials If:**

- **New or Existing Services:** Digital trust benefits both new and existing services, enabling secure credential issuance and extending into signing, accessing, and messaging through the BC Wallet app.
- **Need for Credential Issuance:** If your service requires issuing credentials for identity verification, attributes, or claims, digital trust offers a secure and efficient solution.

Learn more about existing [digital credentials](https://bcgov.github.io/digital-trust-toolkit/docs/foundations/credentials).

### Examples of implementation

Below are examples illustrating the Issuance pattern through a sequence diagram and a real-world case study.

**Sequence Diagram:**

The following sequence diagram visualizes the Issuance pattern using digital credentials. It demonstrates the process of a user (Holder) requesting and receiving a digital credential from an issuer.

![A sequence diagram illustrates a self-serve professional accreditation issuance: Using existing digital credentials to establish a trusted connection, followed by the issuance of the accreditation credential](/img/experiencepatterns/professional-accreditation-pattern.png "Example issuance process")

**Lawyer Use Case:**

A practical implementation of digital trust is showcased in the [justice sector](https://digital.gov.bc.ca/digital-trust/justice-project/). Lawyers get issued a credential from the Law Society of B.C. that proves their practising status (Member credential) and are issued a credential from the BC government (Person credential) which can be used together or separately for a variety of services.

[Watch a video of how lawyers issue their LSBC Member credential](https://www.youtube.com/watch?v=vqATEGCkiU8&list=PLnjj0g-jwI8gmCuVx4rhF7PT397CJXL0p&index=3)

[Watch a video of how people issue their Person crednetial](https://www.youtube.com/watch?v=vqATEGCkiU8&list=PLnjj0g-jwI8gmCuVx4rhF7PT397CJXL0p&index=3)


## Get started

Follow the [Service Delivery Manual](https://bcgov.github.io/digital-trust-toolkit/docs/delivery-manual/) for guidance on activities and workshops that help guide your team **Align**, **Discover**, **Trial** and **Scale**.


### 1. Align

Assess the suitability of digital trust for your service by considering security requirements, user needs, and the potential benefits. Assemble an agile team ready to innovate and experiment.

[Complete the Align phase →](https://bcgov.github.io/digital-trust-toolkit/docs/delivery-manual/align/)


### 2. Discover

Research user needs and gather insights from stakeholders to understand how digital credentials can enhance user experience and address specific challenges.

[Complete the Discover phase →](https://bcgov.github.io/digital-trust-toolkit/docs/delivery-manual/discover/)

Issuance UX design best practices (TBD)


### 3. Trial

Implement and test the digital trust solution, conducting pilot trials to validate the approach and refine the implementation based on feedback.

[Complete the Trial phase →](https://bcgov.github.io/digital-trust-toolkit/docs/delivery-manual/trial/)

Becoming an issuer→ **Coming soon!**


### 4. Scale

Launch the digital trust solution broadly, monitor its performance, and plan for scaling to cover additional services or a broader user base, ensuring continuous improvement.

Complete the Scale phase → **Coming soon!**


## Resources

- Check out the [BC Wallet showcase](https://digital.gov.bc.ca/digital-trust/showcase/) for interactive example
- Review [Becoming an issuer](https://ditp-bc.atlassian.net/wiki/spaces/DTT/pages/207126646/Becoming+an+Issuer) tutorial
- Explore [existing credentials, their schema and branding](https://bcgov.github.io/aries-oca-bundles/OCABundles/schema/bcgov-digital-trust/LCRB/selling-it-right/)
- [Using Credentials using OpenID4VC Issuer module](https://credo.js.org/guides/tutorials/openid4vc/issuing-credentials-using-openid4vc-issuer-module)
- [Governance Frameworks](https://bcgov.github.io/digital-trust-toolkit/docs/governance/)

## Contact

If you'd like to start issuing credentials and need support, [connect with the Digital Trust team](https://digital.gov.bc.ca/digital-trust/contact/)
