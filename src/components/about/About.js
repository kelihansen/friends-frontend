import React, { PureComponent } from 'react';
import styles from './About.css';

export default class About extends PureComponent {
  render() {
    return (
      <div className={styles.about}>
        <p>We built Together out of a desire for true personal connection.</p>
        <p>Get started by signing up. (Hint: You can make up an email address if you like. It just needs to be unique in our system.)
        </p>
        <p>
          Your profile will only be shared with friends you confirm. Fill it in, starting with a photo URL. A 150 &times; 150px image will look best. Let your friends know how you prefer to be contacted and when you have free time.
        </p>
        <p>
          Now comes the good part. Think about what you have to offer as a friend. Maybe you like to bake cookies but need help eating them. Maybe you&apos;d like to share your woodworking skills. Enter anything you&apos;d like to give in the &ldquo;Giving&rdquo; section of your profile. If there&apos;s a time limit on your offer, add a date. If you&apos;d like your offer to be highlighted as urgent, check the box.
        </p>
        <p>
          Next, think about what you&apos;d like from your friends. Are you looking for a hiking companion? Do you wish someone would handwrite you a letter? Add these to the &ldquo;Requesting&rdquo; section of your profile.
        </p>
        <p>
          Connect with your friends, and see what they&apos;re giving and requesting by visiting their profiles. You can also find everything your friends have marked as urgent in your feed – click a friend&apos;s name to access their profile from there.
        </p>
        <p>
          By reflecting on what we have to offer and where we could use help, we open ourselves up to stronger bonds. Join Together and discover what you have to gain by sharing what you have to give.
        </p>
        <p> 
          Together was created as a final project for <a href="https://www.alchemycodelab.com" target="_blank" rel="noopener noreferrer">Alchemy Code Lab</a>&apos;s career-track program in full-stack JavaScript. Find the code at <a href="https://github.com/kelihansen/friends-frontend" target="_blank" rel="noopener noreferrer">https://github.com/kelihansen/friends-frontend</a>.
        </p>
      </div>
    );
  }
}

