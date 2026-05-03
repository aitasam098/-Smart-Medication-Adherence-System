const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-white to-green-400">
      {children}
    </div>
  );
};

export default AuthLayout;