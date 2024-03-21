const profileData = {
  publicProfile: {
    query: `
      query userPublicProfile($username: String!) {
        matchedUser(username: $username) {
          contestBadge {
            name
            expired
            hoverText
            icon
          }
          username
          githubUrl
          twitterUrl
          linkedinUrl
          profile {
            ranking
            userAvatar
            realName
            aboutMe
            school
            websites
            countryName
            company
            jobTitle
            skillTags
            postViewCount
            postViewCountDiff
            reputation
            reputationDiff
            solutionCount
            solutionCountDiff
            categoryDiscussCount
            categoryDiscussCountDiff
          }
        }
      }
    `,
  },
  stats: {
    query: `
        query skillStats($username: String!) {
        matchedUser(username: $username) {
            tagProblemCounts {
            advanced {
                tagName
                tagSlug
                problemsSolved
            }
            intermediate {
                tagName
                tagSlug
                problemsSolved
            }
            fundamental {
                tagName
                tagSlug
                problemsSolved
            }
            }
        }
    }
    `,
  },
};

module.exports = { profileData };
