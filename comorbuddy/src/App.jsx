const GroceryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const groceryCategories = [
    { id: 'all', name: 'All Items', count: 24 },
    { id: 'diabetes', name: 'Diabetes Friendly', count: 8 },
    { id: 'heart', name: 'Heart Healthy', count: 12 },
    { id: 'low-sodium', name: 'Low Sodium', count: 6 }
  ];

  const groceryItems = [
    {
      id: 1,
      name: 'Quinoa',
      category: 'Grains',
      price: '$8.99',
      healthScore: 95,
      benefits: ['High Protein', 'Low GI', 'Gluten-Free'],
      icon: Wheat,
      tags: ['diabetes', 'heart']
    },
    {
      id: 2,
      name: 'Wild Salmon',
      category: 'Protein',
      price: '$24.99',
      healthScore: 92,
      benefits: ['Omega-3', 'Heart Healthy', 'Low Mercury'],
      icon: Beef,
      tags: ['heart']
    },
    {
      id: 3,
      name: 'Greek Yogurt',
      category: 'Dairy',
      price: '$6.49',
      healthScore: 88,
      benefits: ['Probiotics', 'High Protein', 'Low Sugar'],
      icon: Milk,
      tags: ['diabetes']
    },
    {
      id: 4,
      name: 'Blueberries',
      category: 'Fruits',
      price: '$4.99',
      healthScore: 94,
      benefits: ['Antioxidants', 'Low GI', 'Anti-inflammatory'],
      icon: Apple,
      tags: ['diabetes', 'heart']
    },
    {
      id: 5,
      name: 'Spinach',
      category: 'Vegetables',
      price: '$3.99',
      healthScore: 96,
      benefits: ['Iron Rich', 'Low Sodium', 'High Folate'],
      icon: Apple,
      tags: ['heart', 'low-sodium']
    },
    {
      id: 6,
      name: 'Almonds',
      category: 'Nuts',
      price: '$12.99',
      healthScore: 90,
      benefits: ['Healthy Fats', 'Vitamin E', 'Magnesium'],
      icon: Apple,
      tags: ['diabetes', 'heart']
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? groceryItems 
    : groceryItems.filter(item => item.tags.includes(selectedCategory));

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Smart Grocery List</h1>
          <p className="text-gray-600 mt-1">Personalized recommendations for your health conditions</p>
        </div>
        <Button className="mt-4 sm:mt-0">
          <ShoppingCart className="h-4 w-4 mr-2" />
          View Cart (6)
        </Button>
      </div>

      {/* Health Impact Summary */}
      <Card className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Weekly Health Impact</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">89%</div>
                <div className="text-sm text-gray-600">Diabetes Score</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">92%</div>
                <div className="text-sm text-gray-600">Heart Health</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">$47</div>
                <div className="text-sm text-gray-600">Est. Savings</div>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-600 mb-1">Overall Health Score</div>
            <div className="text-3xl font-bold text-emerald-600">A+</div>
          </div>
        </div>
      </Card>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {groceryCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              selectedCategory === category.id
                ? 'bg-emerald-100 text-emerald-700 border-2 border-emerald-300'
                : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            {category.name} ({category.count})
          </button>
        ))}
      </div>

      {/* Grocery Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.id} hover className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-900">{item.price}</div>
                  <div className="text-sm text-emerald-600 font-medium">
                    Health: {item.healthScore}%
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex flex-wrap gap-1">
                  {item.benefits.map((benefit, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <Button variant="secondary" size="sm">
                    <Plus className="h-4 w-4 mr-1" />
                    Add to Cart
                  </Button>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Heart className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

const DietPlanPage = () => {
  const [selectedDay, setSelectedDay] = useState('monday');

  const weekDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  const mealPlan = {
    monday: {
      breakfast: {
        name: 'Oatmeal with Berries',
        calories: 320,
        carbs: 45,
        protein: 12,
        fat: 8,
        ingredients: ['Steel-cut oats', 'Fresh blueberries', 'Almond milk', 'Cinnamon'],
        benefits: ['Low GI', 'High Fiber', 'Heart Healthy']
      },
      lunch: {
        name: 'Quinoa Salad Bowl',
        calories: 450,
        carbs: 52,
        protein: 18,
        fat: 15,
        ingredients: ['Quinoa', 'Mixed greens', 'Cherry tomatoes', 'Avocado', 'Olive oil'],
        benefits: ['Complete Protein', 'Anti-inflammatory', 'Low Sodium']
      },
      dinner: {
        name: 'Grilled Salmon & Vegetables',
        calories: 520,
        carbs: 28,
        protein: 35,
        fat: 22,
        ingredients: ['Wild salmon', 'Broccoli', 'Sweet potato', 'Lemon', 'Herbs'],
        benefits: ['Omega-3 Rich', 'Low Mercury', 'Diabetes Friendly']
      },
      snacks: [
        { name: 'Greek Yogurt', calories: 120, time: '10:00 AM' },
        { name: 'Almonds (1oz)', calories: 160, time: '3:00 PM' }
      ]
    }
  };

  const currentMeals = mealPlan[selectedDay];
  const totalCalories = currentMeals.breakfast.calories + currentMeals.lunch.calories + currentMeals.dinner.calories + 
                       currentMeals.snacks.reduce((sum, snack) => sum + snack.calories, 0);

  const MealCard = ({ meal, mealType, time }) => (
    <Card className="p-6 mb-4">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="text-lg font-semibold text-gray-900">{meal.name}</h3>
            <span className="text-sm text-gray-500">{time}</span>
          </div>
          <div className="flex space-x-4 text-sm text-gray-600">
            <span>{meal.calories} cal</span>
            <span>{meal.carbs}g carbs</span>
            <span>{meal.protein}g protein</span>
            <span>{meal.fat}g fat</span>
          </div>
        </div>
        <Button variant="ghost" size="sm">
          <CheckCircle className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-3">
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Ingredients:</h4>
          <div className="flex flex-wrap gap-2">
            {meal.ingredients.map((ingredient, index) => (
              <span key={index} className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                {ingredient}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Health Benefits:</h4>
          <div className="flex flex-wrap gap-2">
            {meal.benefits.map((benefit, index) => (
              <span key={index} className="px-2 py-1 text-xs bg-emerald-100 text-emerald-700 rounded-full">
                {benefit}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Weekly Diet Plan</h1>
          <p className="text-gray-600 mt-1">Personalized meals for your health conditions</p>
        </div>
        <Button>
          <Calendar className="h-4 w-4 mr-2" />
          Generate New Plan
        </Button>
      </div>

      {/* Daily Summary */}
      <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{totalCalories}</div>
            <div className="text-sm text-gray-600">Total Calories</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">85%</div>
            <div className="text-sm text-gray-600">Diabetes Score</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">92%</div>
            <div className="text-sm text-gray-600">Heart Health</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">8g</div>
            <div className="text-sm text-gray-600">Net Carbs</div>
          </div>
        </div>
      </Card>

      {/* Day Selector */}
      <div className="flex flex-wrap gap-2">
        {weekDays.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 capitalize ${
              selectedDay === day
                ? 'bg-emerald-600 text-white'
                : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Meals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Main Meals</h2>
          <MealCard meal={currentMeals.breakfast} mealType="breakfast" time="8:00 AM" />
          <MealCard meal={currentMeals.lunch} mealType="lunch" time="1:00 PM" />
          <MealCard meal={currentMeals.dinner} mealType="dinner" time="7:00 PM" />
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Snacks & Hydration</h2>
          <Card className="p-6 mb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Scheduled Snacks</h3>
            <div className="space-y-3">
              {currentMeals.snacks.map((snack, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <div>
                      <div className="font-medium text-gray-900">{snack.name}</div>
                      <div className="text-sm text-gray-600">{snack.time}</div>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-gray-700">{snack.calories} cal</div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Water Intake</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Daily Goal: 8 glasses</span>
                <span className="font-medium text-emerald-600">6/8 completed</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-emerald-500 h-3 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <Button variant="secondary" size="sm" className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Log Water Intake
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

const RemindersPage = () => {
  const [selectedTab, setSelectedTab] = useState('today');

  const medications = [
    {
      id: 1,
      name: 'Metformin',
      dosage: '500mg',
      frequency: 'Twice daily',
      times: ['8:00 AM', '8:00 PM'],
      taken: [true, false],
      condition: 'Diabetes',
      nextDose: '8:00 PM',
      foodInteraction: 'Take with food',
      color: 'emerald'
    },
    {
      id: 2,
      name: 'Lisinopril',
      dosage: '10mg',
      frequency: 'Once daily',
      times: ['9:00 AM'],
      taken: [true],
      condition: 'Hypertension',
      nextDose: 'Tomorrow 9:00 AM',
      foodInteraction: 'Avoid high potassium foods',
      color: 'blue'
    },
    {
      id: 3,
      name: 'Atorvastatin',
      dosage: '20mg',
      frequency: 'Once daily (Evening)',
      times: ['9:00 PM'],
      taken: [false],
      condition: 'High Cholesterol',
      nextDose: '9:00 PM',
      foodInteraction: 'Avoid grapefruit',
      color: 'purple'
    }
  ];

  const upcomingReminders = [
    { time: '8:00 PM', medication: 'Metformin 500mg', action: 'Take with dinner' },
    { time: '9:00 PM', medication: 'Atorvastatin 20mg', action: 'Take before bed' },
    { time: '8:00 AM', medication: 'Metformin 500mg', action: 'Take with breakfast', tomorrow: true }
  ];

  const interactions = [
    {
      type: 'warning',
      message: 'Metformin + High carb meal: May reduce effectiveness',
      recommendation: 'Take 30 minutes before meals'
    },
    {
      type: 'info',
      message: 'Lisinopril + Bananas: High potassium interaction',
      recommendation: 'Limit banana intake to 1 per day'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Medicine Reminders</h1>
          <p className="text-gray-600 mt-1">Stay on track with your medication schedule</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Medication
        </Button>
      </div>

      {/* Today's Progress */}
      <Card className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Today's Progress</h3>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium text-green-600">3/5 doses taken</span>
          </div>
        </div>
        <div className="w-full bg-green-200 rounded-full h-3 mb-4">
          <div className="bg-green-500 h-3 rounded-full" style={{ width: '60%' }}></div>
        </div>
        <p className="text-sm text-gray-600">Great job! You're 60% complete for today.</p>
      </Card>

      {/* Tab Navigation */}
      <div className="flex space-x-4 border-b border-gray-200">
        {['today', 'upcoming', 'interactions'].map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`pb-2 px-1 text-sm font-medium capitalize transition-colors duration-200 ${
              selectedTab === tab
                ? 'text-emerald-600 border-b-2 border-emerald-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab === 'interactions' ? 'Food Interactions' : tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {selectedTab === 'today' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {medications.map((med) => (
            <Card key={med.id} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{med.name}</h3>
                  <p className="text-sm text-gray-600">{med.dosage} • {med.frequency}</p>
                  <p className="text-xs text-gray-500 mt-1">For {med.condition}</p>
                </div>
                <div className={`w-3 h-3 bg-${med.color}-500 rounded-full`}></div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Today's Schedule:</h4>
                  <div className="space-y-2">
                    {med.times.map((time, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                        <span className="text-sm text-gray-700">{time}</span>
                        <div className="flex items-center space-x-2">
                          {med.taken[index] ? (
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          ) : (
                            <Clock className="h-4 w-4 text-gray-400" />
                          )}
                          <span className={`text-xs ${med.taken[index] ? 'text-green-600' : 'text-gray-500'}`}>
                            {med.taken[index] ? 'Taken' : 'Pending'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Next dose:</span>
                    <span className="text-sm font-medium text-gray-900">{med.nextDose}</span>
                  </div>
                  <div className="mt-2 p-2 bg-yellow-50 rounded-lg">
                    <p className="text-xs text-yellow-700">{med.foodInteraction}</p>
                  </div>
                </div>

                {!med.taken.every(taken => taken) && (
                  <Button variant="success" size="sm" className="w-full">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Mark as Taken
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      )}

      {selectedTab === 'upcoming' && (
        <div className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Next 24 Hours</h3>
            <div className="space-y-3">
              {upcomingReminders.map((reminder, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <div className="flex-shrink-0">
                    <div className={`w-3 h-3 rounded-full ${reminder.tomorrow ? 'bg-blue-500' : 'bg-emerald-500'}`}></div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-900">{reminder.medication}</div>
                        <div className="text-sm text-gray-600">{reminder.action}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-gray-900">{reminder.time}</div>
                        {reminder.tomorrow && (
                          <div className="text-xs text-blue-600">Tomorrow</div>
                        )}
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Bell className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {selectedTab === 'interactions' && (
        <div className="space-y-4">
          {interactions.map((interaction, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start space-x-4">
                <div className={`p-2 rounded-full ${
                  interaction.type === 'warning' ? 'bg-yellow-100' : 'bg-blue-100'
                }`}>
                  <AlertTriangle className={`h-5 w-5 ${
                    interaction.type === 'warning' ? 'text-yellow-600' : 'text-blue-600'
                  }`} />
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-gray-900 mb-1">{interaction.message}</h3>
                  <p className="text-sm text-gray-600 mb-3">{interaction.recommendation}</p>
                  <Button variant="secondary" size="sm">
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

const RewardsPage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const userStats = {
    totalPoints: 2340,
    weeklyPoints: 450,
    monthlyPoints: 1890,
    currentStreak: 12,
    level: 'Gold',
    nextLevel: 'Platinum',
    pointsToNext: 660,
    rank: 23,
    totalUsers: 1500
  };

  const challenges = [
    {
      id: 1,
      title: 'Medication Adherence Master',
      description: 'Take all medications on time for 7 consecutive days',
      progress: 85,
      reward: 150,
      timeLeft: '2 days',
      type: 'streak',
      icon: Bell
    },
    {
      id: 2,
      title: 'Healthy Grocery Shopper',
      description: 'Buy 20 recommended items this week',
      progress: 60,
      reward: 100,
      timeLeft: '4 days',
      type: 'count',
      icon: ShoppingCart
    },
    {
      id: 3,
      title: 'Diet Plan Champion',
      description: 'Follow your meal plan for 5 days',
      progress: 40,
      reward: 200,
      timeLeft: '5 days',
      type: 'consistency',
      icon: Apple
    },
    {
      id: 4,
      title: 'Water Intake Hero',
      description: 'Meet daily hydration goals for a week',
      progress: 100,
      reward: 75,
      timeLeft: 'Complete!',
      type: 'completed',
      icon: Target
    }
  ];

  const rewards = [
    {
      id: 1,
      title: '5% Insurance Premium Discount',
      cost: 1000,
      category: 'Insurance',
      description: 'Get 5% off your monthly premium for 6 months',
      available: true,
      popular: true
    },
    {
      id: 2,
      title: 'Free Health Consultation',
      cost: 750,
      category: 'Healthcare',
      description: '30-minute consultation with certified nutritionist',
      available: true,
      popular: false
    },
    {
      id: 3,
      title: 'Premium Diet Plan Access',
      cost: 500,
      category: 'Features',
      description: 'Unlock advanced meal planning for 3 months',
      available: true,
      popular: false
    },
    {
      id: 4,
      title: '$25 Healthy Grocery Credit',
      cost: 2000,
      category: 'Shopping',
      description: 'Credit for partner grocery stores',
      available: false,
      popular: true
    }
  ];

  const leaderboard = [
    { rank: 1, name: 'Sarah M.', points: 4250, avatar: 'SM', change: 'up' },
    { rank: 2, name: 'Mike R.', points: 3980, avatar: 'MR', change: 'same' },
    { rank: 3, name: 'Lisa K.', points: 3750, avatar: 'LK', change: 'up' },
    { rank: 4, name: 'David L.', points: 3200, avatar: 'DL', change: 'down' },
    { rank: 5, name: 'Emma S.', points: 2890, avatar: 'ES', change: 'up' },
    { rank: 23, name: 'You', points: 2340, avatar: 'JD', change: 'up', isUser: true }
  ];

  const activityLog = [
    { action: 'Completed medication reminder', points: 50, time: '2 hours ago' },
    { action: 'Logged healthy meal', points: 25, time: '4 hours ago' },
    { action: 'Met daily water goal', points: 30, time: '6 hours ago' },
    { action: 'Completed weekly challenge', points: 150, time: '1 day ago' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Rewards Dashboard</h1>
          <p className="text-gray-600 mt-1">Earn points and unlock amazing benefits</p>
        </div>
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          <div className="text-right">
            <div className="text-2xl font-bold text-emerald-600">{userStats.totalPoints}</div>
            <div className="text-sm text-gray-600">Total Points</div>
          </div>
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${
            userStats.level === 'Gold' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
          }`}>
            {userStats.level} Member
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-200">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
              <Award className="h-6 w-6 text-emerald-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-600">{userStats.weeklyPoints}</div>
              <div className="text-sm text-gray-600">This Week</div>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Zap className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">{userStats.currentStreak}</div>
              <div className="text-sm text-gray-600">Day Streak</div>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Trophy className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">#{userStats.rank}</div>
              <div className="text-sm text-gray-600">Leaderboard</div>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Star className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">{userStats.pointsToNext}</div>
              <div className="text-sm text-gray-600">To {userStats.nextLevel}</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Level Progress */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Level Progress</h3>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">{userStats.level}</span>
            <ArrowRight className="h-4 w-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-900">{userStats.nextLevel}</span>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
          <div 
            className="bg-gradient-to-r from-emerald-500 to-teal-600 h-3 rounded-full transition-all duration-500"
            style={{ width: '78%' }}
          />
        </div>
        <p className="text-sm text-gray-600">{userStats.pointsToNext} more points needed for {userStats.nextLevel}</p>
      </Card>

      {/* Challenges and Rewards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Challenges */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Active Challenges</h2>
          <div className="space-y-4">
            {challenges.map((challenge) => {
              const Icon = challenge.icon;
              return (
                <Card key={challenge.id} className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      challenge.type === 'completed' 
                        ? 'bg-green-100' 
                        : 'bg-emerald-100'
                    }`}>
                      <Icon className={`h-6 w-6 ${
                        challenge.type === 'completed' 
                          ? 'text-green-600' 
                          : 'text-emerald-600'
                      }`} />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-900">{challenge.title}</h3>
                          <p className="text-sm text-gray-600">{challenge.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-emerald-600">+{challenge.reward}</div>
                          <div className="text-xs text-gray-500">points</div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Progress</span>
                          <span className={`font-medium ${
                            challenge.progress === 100 ? 'text-green-600' : 'text-gray-900'
                          }`}>
                            {challenge.progress}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-300 ${
                              challenge.progress === 100 ? 'bg-green-500' : 'bg-emerald-500'
                            }`}
                            style={{ width: `${challenge.progress}%` }}
                          />
                        </div>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{challenge.timeLeft}</span>
                          {challenge.type === 'completed' && (
                            <span className="text-green-600 font-medium">✓ Completed</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Available Rewards */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Available Rewards</h2>
          <div className="space-y-4">
            {rewards.map((reward) => (
              <Card key={reward.id} className={`p-6 ${reward.popular ? 'ring-2 ring-emerald-200' : ''}`}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold text-gray-900">{reward.title}</h3>
                      {reward.popular && (
                        <span className="px-2 py-1 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{reward.description}</p>
                    <span className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full mt-2">
                      {reward.category}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900">{reward.cost}</div>
                    <div className="text-xs text-gray-500">points</div>
                  </div>
                </div>
                
                <Button 
                  variant={reward.available && userStats.totalPoints >= reward.cost ? 'primary' : 'secondary'}
                  size="sm"
                  className="w-full"
                  disabled={!reward.available || userStats.totalPoints < reward.cost}
                >
                  {!reward.available ? 'Coming Soon' : 
                   userStats.totalPoints < reward.cost ? 'Not Enough Points' : 
                   'Redeem Now'}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Leaderboard and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Leaderboard */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Community Leaderboard</h3>
          <div className="space-y-3">
            {leaderboard.map((user, index) => (
              <div key={index} className={`flex items-center space-x-4 p-3 rounded-lg ${
                user.isUser ? 'bg-emerald-50 border border-emerald-200' : 'hover:bg-gray-50'
              }`}>
                <div className="flex-shrink-0">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    user.rank <= 3 
                      ? user.rank === 1 ? 'bg-yellow-100 text-yellow-800' :
                        user.rank === 2 ? 'bg-gray-100 text-gray-800' :
                        'bg-orange-100 text-orange-800'
                      : user.isUser ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {user.avatar}
                  </div>
                </div>
                <div className="flex-grow flex items-center justify-between">
                  <div>
                    <div className={`font-medium ${user.isUser ? 'text-emerald-900' : 'text-gray-900'}`}>
                      #{user.rank} {user.name}
                    </div>
                    <div className="text-sm text-gray-600">{user.points} points</div>
                  </div>
                  <div className={`text-xs px-2 py-1 rounded-full ${
                    user.change === 'up' ? 'bg-green-100 text-green-700' :
                    user.change === 'down' ? 'bg-red-100 text-red-700' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {user.change === 'up' ? '↗' : user.change === 'down' ? '↘' : '─'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {activityLog.map((activity, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <div className="flex-grow">
                  <div className="text-sm font-medium text-gray-900">{activity.action}</div>
                  <div className="text-xs text-gray-500">{activity.time}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-emerald-600">+{activity.points}</div>
                  <div className="text-xs text-gray-500">pts</div>
                </div>
              </div>
            ))}
          </div>
          
          <Button variant="ghost" className="w-full mt-4">
            View All Activity
          </Button>
        </Card>
      </div>
    </div>
  );
};import React, { useState } from 'react';
import { Heart, Users, Calendar, Bell, Award, Menu, X, ArrowRight, CheckCircle, Star, TrendingUp } from 'lucide-react';

// UI Components
const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-emerald-600 hover:bg-emerald-700 text-white focus:ring-emerald-500 shadow-sm hover:shadow-md',
    secondary: 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 focus:ring-emerald-500 shadow-sm hover:shadow-md',
    ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100',
    success: 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-500'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-4 py-2 text-sm rounded-lg',
    lg: 'px-6 py-3 text-base rounded-lg'
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className = '', hover = false }) => {
  return (
    <div className={`bg-white rounded-xl border border-gray-200 shadow-sm ${hover ? 'hover:shadow-md transition-shadow duration-200' : ''} ${className}`}>
      {children}
    </div>
  );
};

const Input = ({ label, error, className = '', ...props }) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 ${error ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : ''} ${className}`}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

// Layout Components
const Header = ({ onMenuToggle, currentPage, setCurrentPage }) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <button
              onClick={onMenuToggle}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
            >
              <Menu className="h-5 w-5" />
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Comorbuddy</span>
            </div>
          </div>
          
          <nav className="hidden lg:flex space-x-8">
            {['Dashboard', 'Grocery', 'Diet Plan', 'Reminders', 'Rewards'].map((item) => (
              <button
                key={item}
                onClick={() => setCurrentPage(item.toLowerCase().replace(' ', ''))}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  currentPage === item.toLowerCase().replace(' ', '')
                    ? 'text-emerald-600 border-b-2 border-emerald-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <Bell className="h-5 w-5" />
            </button>
            <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-emerald-700">JD</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const Sidebar = ({ isOpen, onClose, currentPage, setCurrentPage }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: TrendingUp },
    { id: 'grocery', label: 'Grocery', icon: Heart },
    { id: 'dietplan', label: 'Diet Plan', icon: Calendar },
    { id: 'reminders', label: 'Reminders', icon: Bell },
    { id: 'rewards', label: 'Rewards', icon: Award },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 z-50 transform transition-transform duration-300 lg:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:static lg:z-0`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Comorbuddy</span>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-1 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    onClose();
                  }}
                  className={`w-full flex items-center space-x-3 px-3 py-2 text-left rounded-lg transition-colors duration-200 ${
                    currentPage === item.id
                      ? 'bg-emerald-50 text-emerald-700 font-medium'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};

// Feature Pages
const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Good morning, John!</h1>
        <p className="text-gray-600">Here's your health summary for today</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Health Score', value: '85%', change: '+5%', color: 'emerald' },
          { label: 'Medications', value: '3/3', change: 'On track', color: 'blue' },
          { label: 'Diet Goals', value: '7/10', change: '+2 today', color: 'amber' },
          { label: 'Reward Points', value: '2,340', change: '+120', color: 'purple' }
        ].map((stat, index) => (
          <Card key={index} hover className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className={`text-sm font-medium text-${stat.color}-600 bg-${stat.color}-50 px-2 py-1 rounded-full`}>
                {stat.change}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            {[
              { label: 'Update meal log', icon: Calendar },
              { label: 'View grocery list', icon: Heart },
              { label: 'Check medication schedule', icon: Bell }
            ].map((action, index) => {
              const Icon = action.icon;
              return (
                <button
                  key={index}
                  className="w-full flex items-center justify-between p-3 text-left rounded-lg border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-900">{action.label}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </button>
              );
            })}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Challenges</h3>
          <div className="space-y-4">
            {[
              { title: 'Complete morning medications', progress: 100, points: 50 },
              { title: 'Log 3 meals', progress: 67, points: 75 },
              { title: 'Meet daily water intake', progress: 40, points: 25 }
            ].map((challenge, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">{challenge.title}</span>
                  <span className="text-xs text-emerald-600 font-medium">+{challenge.points} pts</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${challenge.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

const OnboardingStart = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <Card className="p-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-700">Step {step} of {totalSteps}</span>
              <span className="text-sm text-gray-500">{Math.round((step / totalSteps) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(step / totalSteps) * 100}%` }}
              />
            </div>
          </div>

          {/* Step Content */}
          <div className="mb-8">
            {step === 1 && (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-emerald-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Welcome to Comorbuddy</h2>
                <p className="text-gray-600 text-lg">Let's set up your personalized health profile to get started with better health management.</p>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input label="First Name" placeholder="John" />
                  <Input label="Last Name" placeholder="Doe" />
                  <Input label="Age" type="number" placeholder="35" />
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                      <option>Select gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Health Profile</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Health Conditions</label>
                    <div className="grid grid-cols-2 gap-2">
                      {['Diabetes', 'Hypertension', 'Heart Disease', 'Obesity'].map((condition) => (
                        <label key={condition} className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <input type="checkbox" className="rounded text-emerald-600 focus:ring-emerald-500" />
                          <span className="text-sm">{condition}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <Input label="Current Medications" placeholder="List your current medications..." />
                  <Input label="Allergies" placeholder="Any food or drug allergies..." />
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Diet Preferences</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Dietary Preferences</label>
                    <div className="grid grid-cols-2 gap-2">
                      {['Vegetarian', 'Vegan', 'Gluten-Free', 'Low-Sodium'].map((diet) => (
                        <label key={diet} className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <input type="checkbox" className="rounded text-emerald-600 focus:ring-emerald-500" />
                          <span className="text-sm">{diet}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Activity Level</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                      <option>Sedentary</option>
                      <option>Lightly Active</option>
                      <option>Moderately Active</option>
                      <option>Very Active</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <Button 
              variant="secondary" 
              onClick={handlePrev}
              disabled={step === 1}
            >
              Previous
            </Button>
            <Button 
              onClick={handleNext}
              disabled={step === totalSteps}
            >
              {step === totalSteps ? 'Complete Setup' : 'Next Step'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);

  const renderPage = () => {
    if (showOnboarding) {
      return <OnboardingStart />;
    }

    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'grocery':
        return (
          <div className="text-center py-16">
            <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Grocery Recommendations</h2>
            <p className="text-gray-600">Smart grocery suggestions based on your health profile coming soon!</p>
          </div>
        );
      case 'dietplan':
        return (
          <div className="text-center py-16">
            <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Diet Planner</h2>
            <p className="text-gray-600">Personalized meal plans for your health conditions coming soon!</p>
          </div>
        );
      case 'reminders':
        return (
          <div className="text-center py-16">
            <Bell className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Medicine Reminders</h2>
            <p className="text-gray-600">Smart medication scheduling and interaction alerts coming soon!</p>
          </div>
        );
      case 'rewards':
        return (
          <div className="text-center py-16">
            <Award className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Rewards Dashboard</h2>
            <p className="text-gray-600">Earn points and unlock insurance benefits coming soon!</p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  if (showOnboarding) {
    return <OnboardingStart />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onMenuToggle={() => setSidebarOpen(true)}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      
      <div className="flex">
        <Sidebar 
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        
        <main className="flex-1 lg:ml-0 p-6">
          <div className="max-w-7xl mx-auto">
            {renderPage()}
          </div>
          
          {/* Demo Button */}
          <div className="fixed bottom-6 right-6">
            <Button
              onClick={() => setShowOnboarding(!showOnboarding)}
              className="shadow-lg"
            >
              {showOnboarding ? 'View Dashboard' : 'Start Onboarding'}
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;