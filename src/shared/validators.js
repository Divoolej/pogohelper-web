export const validatePresence = value => (
  value !== null
    && value !== undefined
    && value !== ''
    && value !== []
    && value !== {}
    && !Number.isNaN(value)
);
