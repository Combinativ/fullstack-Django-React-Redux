from rest_framework import generics,permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer,RegisterSerializer,LoginSerializer


#Register API
class RegisterAPI(generics.GenericAPIView):
 serializer_class= RegisterSerializer
 def post(self,request,*args,**kwargs):
	 serializer=self.get_serializer(data=request.data)
	 serializer.is_valid(raise_exception=True)
	 user=serializer.save() #saving user into database
	 print("Got request",request)
	 return Response({
		 "user":UserSerializer(user,context=self.get_serializer_context()).data,#return serialized user object
		 #create Token for the specific user on api call
		 "token": AuthToken.objects.create(user)[1], #choosing index for serialization purposes
		#  "Access-Control-Allow-Origin" : "https://master.d3pvk9iwwhaz9a.amplifyapp.com"
	 })

#Login API
class LoginAPI(generics.GenericAPIView):
 serializer_class= LoginSerializer
 def post(self,request,*args,**kwargs):
	 serializer=self.get_serializer(data=request.data)
	 serializer.is_valid(raise_exception=True)
	 user=serializer.validated_data #validating user
	 print("Got login request",request)
	 return Response({
		 "user":UserSerializer(user,context=self.get_serializer_context()).data,#return serialized user object
		 #create Token for the specific user on api call
		 "token": AuthToken.objects.create(user)[1] #choosing index for serialization purposes
	 })
#Get User API
class UserAPI(generics.RetrieveAPIView):
	permission_classes=[
		permissions.IsAuthenticated,
	]
	serializer_class= UserSerializer

	def get_object(self):
	 return self.request.user # returns the user json object for the Token sent

