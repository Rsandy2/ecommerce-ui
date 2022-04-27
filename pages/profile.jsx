import { prisma } from "../lib/prisma";
import { useSession, getSession } from "next-auth/react";
import { getToken } from "next-auth/jwt";

export default function profile({ userData }) {
  // console.log(userData.profile.address.address);
  return (
    <div className="flex items-center h-screen w-full justify-center">
      <div className="max-w-xs">
        <div className="bg-white shadow-xl rounded-lg py-3">
          <div className="photo-wrapper p-2">
            <img
              className="w-32 h-32 rounded-full mx-auto"
              src="https://lh5.googleusercontent.com/-ZPVjNKA2534/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckAoKAkcG3woUFbJwIHBFgsCL1IUg/photo.jpg"
              alt=""
            />
          </div>
          <div className="p-2">
            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
              {userData.username}
            </h3>
            <div className="text-center text-gray-400 text-xs font-semibold">
              <p>{userData.userRole}</p>
            </div>
            <table className="text-xs my-3">
              <tbody>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">
                    Address
                  </td>
                  <td className="px-2 py-2">
                    {userData.profile.address.address}
                  </td>
                  <td className="px-2 py-2">
                    City:
                    {userData.profile.address.city}
                  </td>
                  <tr>
                    <td className="px-2 py-2">
                      State:
                      {userData.profile.address.state}
                    </td>
                  </tr>
                  <td className="px-2 py-2">
                    Zip:
                    {userData.profile.address.zip}
                  </td>
                </tr>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">
                    Phone
                  </td>
                  <td className="px-2 py-2">+678-398-9888</td>
                </tr>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">
                    Email
                  </td>
                  <td className="px-2 py-2">{userData.profile.user.email}</td>
                </tr>
              </tbody>
            </table>

            <div className="text-center my-3">
              <a
                className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                href="#"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  //   const { data: session, status } = useSession();
  const session = await getToken(context);
  console.log(session);
  const userData = await prisma.user.findUnique({
    where: {
      email: `${session ? session["token"]["user"]["email"] : ""}`,
    },
    select: { profile: { select: { user: {}, address: {} } } },
  });

  console.log(userData);
  return {
    props: {
      userData,
    },
  };
}
